import React, { useState, useEffect } from 'react';
import * as S from './SelectItemInputStyles';
import {
  Grid,
  FormControl,
  OutlinedInput,
  IconButton,
  InputAdornment,
  InputLabel,
} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxRoundedIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';

const SelectItemInput: React.FC<any> = ({
  idx,
  type = 'boolean',
  onClickAddOptionBtn,
  onClickRemoveOptionBtn,
  optionList,
  onChangeOptionValue,
}) => {
  const [itemList, setItemList] = useState<
    {
      start?: string;
      adder?: boolean;
      value: string;
    }[]
  >([]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const list = itemList;
    list[idx].value = event.target.value;
    setItemList([...list]);
  };

  useEffect(() => {
    if (type === 'boolean') {
      setItemList([
        {
          start: 'YES',
          value: '',
        },
        {
          start: 'NO',
          value: '',
        },
      ]);
    } else {
      setItemList([
        {
          adder: true,
          value: '',
        },
      ]);
    }
  }, [type]);

  // useEffect(() => {
  //   onChangeSelectItem([...itemList]);
  // }, [itemList]);

  // const onClickAdderBtn = () => {
  //   setItemList([
  //     ...itemList,
  //     {
  //       adder: true,
  //       value: '',
  //     },
  //   ]);
  // };

  const onClickRemoveBtn = (idx: number) => {
    const head = itemList.slice(0, idx);
    const tail = itemList.slice(idx + 1);
    setItemList([...head, ...tail]);
  };

  return (
    <S.SelectItemInput container spacing={3}>
      <Grid item xs={12} md={1}>
        <S.Title variant="h6">선택 항목</S.Title>
      </Grid>
      <Grid item xs={12} md={11}>
        <Grid container spacing={2}>
          {optionList &&
            optionList.map((item: any, optionIdx: number) => {
              return (
                <Grid item xs={12} key={optionIdx}>
                  <FormControl variant="outlined" fullWidth size="small" color="secondary" required>
                    <InputLabel htmlFor="select-item">SelectItem</InputLabel>
                    <OutlinedInput
                      id="select-item"
                      type={'text'}
                      startAdornment={
                        <S.SelectItemName position="start">{`${item.start}`}</S.SelectItemName>
                      }
                      endAdornment={
                        item.adder ? (
                          <InputAdornment position="end">
                            {optionIdx === optionList.length - 1 ? (
                              <IconButton
                                aria-label="add select item input"
                                onClick={() => onClickAddOptionBtn(idx, optionIdx)}
                                color="secondary"
                              >
                                <AddBoxIcon fontSize="large" />
                              </IconButton>
                            ) : null}
                            {optionList.length > 1 ? (
                              <IconButton
                                aria-label="add select item input"
                                onClick={() => onClickRemoveOptionBtn(idx, `${item.start}`)}
                              >
                                <IndeterminateCheckBoxRoundedIcon fontSize="large" />
                              </IconButton>
                            ) : null}
                          </InputAdornment>
                        ) : null
                      }
                      labelWidth={95}
                      value={item.value}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        onChangeOptionValue(idx, `${item.start}`, event.target.value)
                      }
                    />
                  </FormControl>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </S.SelectItemInput>
  );
};

export default SelectItemInput;
