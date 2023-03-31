import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

export default async function handler(req, res) {
    const { id } = req.query;

    const client = new S3Client({
        credentials: {
            accessKeyId: process.env.YESI_AWS_ACCESS_KEY,
            secretAccessKey: process.env.YESI_AWS_SECRET_KEY,
        },
        region: process.env.YESI_AWS_REGION,
    });
    console.log(process.env.YESI_AWS_ACCESS_KEY);
    const command = new GetObjectCommand({
        Bucket: "yesimolinadev",
        Key: id,
    });

    try {
        const response = await client.send(command);
        const s3Object = response.Body;

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=${id}`);
        res.send(s3Object);
    } catch (err) {
        console.error(err);
    }
}

