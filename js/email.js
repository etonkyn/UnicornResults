function sendEmail(subject, body) {
    console.log("starting send email routine")

    const key = "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";
    const sender = "website@fullinpartners.com";
    const recipient = "eric@fullinpartners.com";
    return sendWithService(key, sender, recipient, subject, body);
}

function sendWithService(key, sender, recipient, subject, body) {
  const url = "https://api.sendgrid.com/api/mail.send.json";

  const headers = {
    "Authorization": "Bearer " + key,
    "Content-Type": "application/x-www-form-urlencoded"
  };

  const data = `from=${sender}&to=${recipient}&subject=${subject}&text=${body}`;

  const request = {
    "method": "post",
    "headers": headers,
    "body": data
  };

  return fetch(url, request)
   .then(response => response.json());
}