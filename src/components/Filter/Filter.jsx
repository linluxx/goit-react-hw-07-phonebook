import { useDispatch } from 'react-redux';

import { filterContacts } from 'redux/slices/filterSlice';

import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <FilterLabel>
      Search
      <FilterInput
        type="text"
        name="filter"
        placeholder="Start typing a name"
        onChange={onFilter}
      ></FilterInput>
    </FilterLabel>
  );
};
