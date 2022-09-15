module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
      actionOptions: {
        upload: { ACL: null },
        uploadStream: { ACL: null },
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT"),
        secure: true,
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        debug: true,
        logger: true,
      },
      settings: {
        defaultFrom: "info@nia-help.com",
        defaultReplyTo: "info@nia-help.com",
      },
    },
  },
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "30d",
      },
    },
  },
  ckeditor: {
    enabled: true,
    config: {
      editor: {
        toolbar: {
          items: [
            "paragraph",
            "heading1",
            "heading2",
            "heading3",
            "|",
            "bold",
            "italic",
            "fontColor",
            "fontBackgroundColor",
            "underline",
            "removeFormat",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "alignment",
            "outdent",
            "indent",
            "horizontalLine",
            "|",
            "StrapiMediaLib",
            "blockQuote",
            "insertTable",
            "mediaEmbed",
            "link",
            "|",
            "subscript",
            "superscript",
          ],
        },
      },
    },
  },
  sentry: {
    enabled: true,
    config: {
      dsn: env("SENTRY_DSN"),
    },
  },
  "import-export-entries": {
    enabled: true,
    config: {
      /**
       * Public hostname of the server.
       *
       * If you use the local provider to persist medias,
       * `serverPublicHostname` should be set to properly export media urls.
       */
      serverPublicHostname: env("PUBLIC_URL", "http://localhost:1337"), // default: "".
    },
  },
});
