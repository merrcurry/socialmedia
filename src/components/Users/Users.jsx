import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User';

const Users = (props) => {
   return (
      <div>
         <Pagination currentPage={ props.currentPage }
                     onPaginationClick={ props.onPaginationClick }
                     totalUsers={ props.totalUsers }
                     pageSize={ props.pageSize }
         />
         <User users={ props.users }
               followingInProgress={ props.followingInProgress }
               follow={ props.follow }
               unfollow={ props.unfollow }
         />
      </div>
   )
}

export default Users;
