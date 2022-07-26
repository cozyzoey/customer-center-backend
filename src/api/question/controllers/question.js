"use strict";

/**
 *  question controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::question.question",
  ({ strapi }) => ({
    async delete(ctx) {
      const { id } = ctx.params;

      let entity;

      const question = await strapi.db.query("api::question.question").findOne({
        where: {
          id: ctx.params.id,
          user: { id: ctx.state.user.id },
        },
        populate: true,
      });

      if (!question) {
        return ctx.unauthorized(`You can't update this entry`);
      }

      entity = await strapi.entityService.delete("api::question.question", id);

      // 달린 댓글들 삭제
      await Promise.all(
        question.answers.map((answer) =>
          strapi.entityService.delete("api::answer.answer", answer.id)
        )
      );

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
