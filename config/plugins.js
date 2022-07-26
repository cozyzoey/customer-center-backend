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
    "users-permissions": {
      config: {
        jwt: {
          expiresIn: "30d",
        },
      },
    },
  },
  ckeditor: true,
});
