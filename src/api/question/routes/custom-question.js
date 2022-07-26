module.exports = {
  routes: [
    {
      method: "DELETE",
      path: "/questions/:id",
      handler: "question.delete",
    },
  ],
};
