import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, requestUsers, toggleFollowingProgress, unfollow } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import {
   getCurrentPage,
   getFollowingInProgress,
   getIsFetching,
   getPageSize,
   getTotalUsers,
   getUsers
} from '../../redux/users-selectors';

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize)
   }

   onPaginationClick = (pageNumber) => {
      this.props.requestUsers(pageNumber, this.props.pageSize)
   }

   render() {
      return (
         <>
            { this.props.isFetching && <Preloader/> }
            <Users totalUsers={ this.props.totalUsers }
                   pageSize={ this.props.pageSize }
                   currentPage={ this.props.currentPage }
                   onPaginationClick={ this.onPaginationClick }
                   users={ this.props.users }
                   unfollow={ this.props.unfollow }
                   follow={ this.props.follow }
                   followingInProgress={ this.props.followingInProgress }
            />
         </>
      )
   }

}

const mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      totalUsers: getTotalUsers(state),
      pageSize: getPageSize(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}

export default connect(mapStateToProps, { follow, unfollow, toggleFollowingProgress, requestUsers })(UsersContainer);
