import GitHubCard from "./GithubCard"
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
    const tree = renderer.create(<GitHubCard/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  