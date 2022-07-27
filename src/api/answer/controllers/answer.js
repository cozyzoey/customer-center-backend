"use strict";

/**
 *  answer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::answer.answer", ({ strapi }) => ({
  async update(ctx) {
    const { id } = ctx.params;

    let entity;

    const answer = await strapi.db.query("api::answer.answer").findOne({
      where: {
        id: ctx.params.id,
        user: { id: ctx.state.user.id },
      },
    });

    if (!answer) {
      return ctx.unauthorized(`댓글 작성자가 아닙니다`);
    }

    entity = await strapi.entityService.update(
      "api::answer.answer",
      id,
      ctx.request.body
    );

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },

  async delete(ctx) {
    const { id } = ctx.params;

    let entity;

    const answer = await strapi.db.query("api::answer.answer").findOne({
      where: {
        id: ctx.params.id,
        user: { id: ctx.state.user.id },
      },
      populate: true,
    });

    if (!answer) {
      return ctx.unauthorized(`댓글 작성자가 아닙니다`);
    }

    entity = await strapi.entityService.delete("api::answer.answer", id);

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
