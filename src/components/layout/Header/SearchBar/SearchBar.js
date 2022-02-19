import React, {useState} from 'react';
import makeStyles from '@mui/styles/makeStyles';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import CustomInput from '../../../uiComponents/CustomInput/CustomInput';
import searchBarStyle from './searchBarStyle';

const useStyles = makeStyles(searchBarStyle);

function SearchBar({hide}) {
  const [searchValue, setSearchValue] = useState('');
  const styles = useStyles();

  const handleChange = ({target: {value}}) => {
    setSearchValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // onSearchClick(searchValue);
  };
  if (hide) return null;
  return (
    <CustomInput
      className={styles.root}
      id="search"
      name="search"
      lg
      value={searchValue}
      onChange={handleChange}
      placeholder="Search.."
      iconComponent={<SearchIcon />}
    />
  );
}

SearchBar.propTypes = {hide: PropTypes.bool};
SearchBar.defaultProps = {hide: false};

export default SearchBar;
