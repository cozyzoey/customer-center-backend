"use strict";

/**
 *  privacy-consent-form controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::privacy-consent-form.privacy-consent-form",
  ({ strapi }) => ({
    async email(ctx) {
      const emailTemplate = {
        subject: "참여 동의서 제출하기",
        text: "인공지능 학습용 데이터 구축사업 참여에 감사드립니다. 아래 링크를 눌러서 참여 동의서 제출을 완료해주세요. <%= privacyConsentUrl %>",
        html: "<h3>인공지능 학습용 데이터 구축사업 참여에 감사드립니다.</h3><p>아래 링크를 눌러서 참여 동의서 제출을 완료해주세요.</p><a href='<%= privacyConsentUrl %>' target='_blank'><%= privacyConsentUrl %></a>",
      };

      try {
        const { email, cc, privacyConsentUrl } = ctx.request.body;

        if (!email || !cc || !privacyConsentUrl) {
          return ctx.badRequest("요청 내용을 확인해주세요");
        }

        const res = await strapi.plugins[
          "email"
        ].services.email.sendTemplatedEmail(
          { to: email, cc: cc },
          emailTemplate,
          {
            privacyConsentUrl,
          }
        );

        return { data: res, error: null };
      } catch (err) {
        return ctx.internalServerError(err?.message || message || "");
      }
    },
  })
);
