import Diff2Html from '../web_modules/diff2html/bundles/js/diff2html.min.js';
	loadCommit(projectId, commitId) {
		return Utilities.req(`${routes.projects}/${projectId}/${routes.repository}/${routes.commits}/${commitId}/diff`);
	}

		Charts.drawChart(formattedCommitsSerieses, projectName, 'area', this.drawDayCommits.bind(this), { projectId });
						<td>
							<button @click=${() => {this.getCommitDetails(projectId, commit.short_id);}}>Details</button>
						</td>
						<th rowspan="2">Actions</th>
	async getCommitDetails(projectId, commitId) {
		const commit = await this.loadCommit(projectId, commitId);
		this.constructDiffString(commit);
	}

	constructDiffString(commit) {
		const diffs = [];
		commit.forEach(change => {
			diffs.push(`diff --git a/${change.old_path} b/${change.new_path}`);
			if (change.new_file) {
				diffs.push(`new file mode ${change.b_mode}`);
			}
			diffs.push(change.diff);
		});
		document.querySelector('#diffs-panel').style.display = 'flex';
		document.querySelector('#diffs-content').innerHTML = Diff2Html.html(diffs.join('\n'));
	}
