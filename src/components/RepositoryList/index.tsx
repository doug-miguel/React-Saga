import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from "../../store/ducks/repositoris/types";
import { ApplicationState } from "../../store";
import * as RepositoriesAction from '../../store/ducks/repositoris/actions'

import RepoItem from '../RepositoryItem'

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest()
  }

  render() {
    const { repositories } = this.props;

    return (
      <ul>
        {repositories.map(repo => (
          <RepoItem key={repo.id} repository={repo} />
        ))}
      </ul>
    );
  }
}

const mapStatetoProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesAction, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(RepositoryList);