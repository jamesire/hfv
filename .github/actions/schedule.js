// make sure to `npm install @octokit/action`
const { Octokit } = require("@octokit/action");

scheduleMerge()

async function scheduleMerge() {
  const octokit = new Octokit();

  // retrieve the full `pull_request` event payload
  const eventPayload = require(process.env.GITHUB_EVENT_PATH);

  // find and parse the date string from the `/schedule ...` command
  const datestring = getScheduleDateString(eventPayload.pull_request.body);

  if (!datestring) {
    console.log(`No /schedule command found`);
    return;
  }

  // Create a check run using the REST API
  // https://developer.github.com/v3/checks/runs/#create-a-check-run
  const { data } = await octokit.request('POST /repos/:owner/:repo/check-runs', {
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    name: "Merge Schedule",
    head_sha: eventPayload.pull_request.head.sha,
    status: "in_progress",
    output: {
      title: `Scheduled to me merged on ${datestring}`,
      summary: "TO BE DONE: add useful summary"
    }
  });
  console.log(`Check run created: ${data.html_url}`);
}
