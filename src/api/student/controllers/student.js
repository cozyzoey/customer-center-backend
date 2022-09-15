"use strict";

/**
 * student controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::student.student", ({ strapi }) => ({
  async create(ctx) {
    const { dataCollectionSession } = ctx.request.body.data;

    const prevDataCollectionSession = await strapi.db
      .query("api::data-collection-session.data-collection-session")
      .findOne({
        where: {
          id: dataCollectionSession,
        },
      });

    if (
      !prevDataCollectionSession ||
      prevDataCollectionSession.remainingApplicants === 0
    ) {
      return ctx.badRequest(`다른 데이터 수집 기간을 선택하세요`);
    }

    // Calling the default core action
    const { data, meta } = await super.create(ctx);

    // 데이터 수집 세션의 남은 자리 - 1
    await strapi.entityService.update(
      "api::data-collection-session.data-collection-session",
      dataCollectionSession,
      {
        data: {
          remainingApplicants:
            prevDataCollectionSession.remainingApplicants - 1,
        },
      }
    );

    return { data, meta };
  },
}));
