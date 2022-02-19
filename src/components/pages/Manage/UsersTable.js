import React, {useEffect, useState} from 'react';
import MaterialTable from '@material-table/core';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import tableStyle from './tableStyle';
import useUser from '../../../hooks/useUser';
import useUi from '../../../hooks/useUi';
import CustomAvatar from '../../uiComponents/CuatomAvatar/CustomAvatar';

const useStyles = makeStyles(tableStyle);

const columns = [
  {title: 'Id', field: 'id', hidden: true},
  {title: 'Is Manager', field: 'isManager', filtering: false},
  {
    title: 'Report Count',
    field: 'notifications',
    render: rowData => rowData.notifications.length,
    filtering: false,
    editable: 'never',
  },
  {
    title: 'Posts Count',
    field: 'posts',
    render: rowData => rowData.posts.length,
    filtering: false,
    editable: 'never',
  },
  {title: 'Email', field: 'email', filtering: false},
  {title: 'Last Name', field: 'lastname', filtering: false},
  {title: 'First Name', field: 'firstname', filtering: false},
  {
    title: '#',
    field: 'image',
    editable: 'never',
    filtering: false,
    render: rowData => <CustomAvatar imageUrl={rowData.image.url} size="sm" />,
  },
];

function UsersTable({users}) {
  const {userState, userActions} = useUser();
  const {uiState, uiActions} = useUi();
  const styles = useStyles();
  const [state, setState] = useState([]);
  useEffect(() => {
    if (state.length === 0) {
      setState(users);
    }
  }, [users]);

  const handleDeleteUser = async rowData => {
    userActions.deleteUser(rowData.id);
    setState(prevState => prevState.filter(item => item.id !== rowData.id));
  };
  const handleUpdateUser = async rowData => {
    userActions.updateUserDetails(rowData, rowData.id);
    setState(prevState =>
      prevState.map(item => (item.id === rowData.id ? {...rowData} : item)),
    );
  };
  return (
    <Box className={styles.tableResponsive}>
      <MaterialTable
        isLoading={uiState.loader.show}
        onPageChange={() => {}}
        onPa
        options={{
          actionsColumnIndex: 6,
          filtering: true,
          toolbar: true,
        }}
        title="Users Table"
        columns={columns}
        data={state}
        editable={{
          onRowUpdate: handleUpdateUser,
          onRowDelete: handleDeleteUser,
        }}
      />
    </Box>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      fullName: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default UsersTable;
