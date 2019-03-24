import React, { PureComponent } from 'react'

class GitHubStarButton extends PureComponent {
  async componentDidMount () {
    const gitHubButtonModule = await import('github-buttons')

    this.GitHubButton = gitHubButtonModule.default;

    this.forceUpdate();
  }

  render() {
    const GitHubButton = this.GitHubButton;

    if (!GitHubButton) {
      return null;
    }

    return (
      <GitHubButton
        className='button is-primary is-small'
        href='https://github.com/donaldboulton/publiuslogic'
        data-icon='octicon-star'
        data-show-count='true'
        aria-label='Star Publius/publiuslogic on GitHub'
      >
        Star
      </GitHubButton>
    );
  }
}

export default GitHubStarButton

