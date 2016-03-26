import React, {Component} from 'react';

class SearchGithub extends Component {
  handleSubmit() {
    let username = this.refs.username;
    let router = this.context.router;

    router.push(`profile/${username.value}`);
  }

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref='username'/>
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary" >
              Searh Github
            </button>
          </div>
        </form>
      </div>
    )
  }
}

SearchGithub.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SearchGithub;