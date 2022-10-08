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

  async update(ctx) {
    const { dataCollectionSession, deletedAt } = ctx.request.body.data;
    const { id } = ctx.params;

    /**
     * 기존 저장된 데이터 정보
     */
    const prevStudentData = await strapi.db
      .query("api::student.student")
      .findOne({
        where: {
          id,
        },
        populate: true,
      });

    if (!prevStudentData) {
      return ctx.badRequest();
    }

    /**
     * 신청취소 요청이 아니고 데이터 수집 세션을 교체하는 경우
     * 신규로 교체된 데이터 수집 세션 자리 -1
     */
    if (
      !deletedAt &&
      prevStudentData.dataCollectionSession.id !== dataCollectionSession
    ) {
      const curDataCollectionSession = await strapi.db
        .query("api::data-collection-session.data-collection-session")
        .findOne({
          where: {
            id: dataCollectionSession,
          },
        });

      if (
        !curDataCollectionSession ||
        curDataCollectionSession.remainingApplicants === 0
      ) {
        return ctx.badRequest(`다른 데이터 수집 기간을 선택하세요`);
      }

      // 데이터 수집 세션의 남은 자리 - 1
      await strapi.entityService.update(
        "api::data-collection-session.data-collection-session",
        dataCollectionSession,
        {
          data: {
            remainingApplicants:
              curDataCollectionSession.remainingApplicants - 1,
          },
        }
      );
    }

    // Calling the default core action
    const { data, meta } = await super.update(ctx);

    return { data, meta };
  },
}));
