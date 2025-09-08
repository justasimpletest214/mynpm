module.exports = async ({ github, context, core }) => {
  console.log("👋 Hello from publish-resolve-data.js");
  console.log("Repository:", context.repo.owner + "/" + context.repo.repo);
  console.log("Event name:", context.eventName);

  // Fake outputs, just to show how a real script might communicate results
  core.setOutput("version", "1.0.0-demo");
  core.setOutput("dry_run_flag", "--dry-run");
  core.setOutput("success_comment", JSON.stringify({ message: "Demo success!" }));
  core.setOutput("publish_branch", "demo-branch");
  core.setOutput("ref", context.ref);
  core.setOutput("repo", context.repo.owner + "/" + context.repo.repo);

  console.log("✅ Finished demo publish-resolve-data.js");
};
