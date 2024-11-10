import mailchimp, { ErrorResponse } from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    console.log("email", email);
    console.log("MAILCHIMP_API_KEY", process.env.MAILCHIMP_AUDIENCE_ID);
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID ?? "";

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, error: "Email is required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      status: "subscribed",
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error subscribing to Mailchimp:", error);
    const errorMessage =
      (error as ErrorResponse)?.title === "Member Exists"
        ? "You're already subscribed!"
        : "An unexpected error occurred 😩";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
