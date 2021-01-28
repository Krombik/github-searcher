import React, { VFC } from "react";
import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import { State, ThunkDispatcher } from "types";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { setOffset } from "redux/common/actions";
import { SelectInputProps } from "@material-ui/core/Select/SelectInput";

const selectData = createSelector(
  (state: State) => state.common.offset,
  (offset) => ({ offset })
);

const offsetVariants = [20, 25, 50, 100];

const OffsetSelect: VFC = () => {
  const dispatch = useDispatch<ThunkDispatcher>();

  const { offset } = useSelector(selectData);

  const handleCount: SelectInputProps["onChange"] = (e) => {
    const count = e.target.value as number;

    if (offset !== count) dispatch(setOffset(count));
  };

  return (
    <FormControl variant="outlined">
      <Select value={offset} onChange={handleCount} label="Offset">
        {offsetVariants.map((value, index) => (
          <MenuItem value={value} key={index}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default OffsetSelect;
