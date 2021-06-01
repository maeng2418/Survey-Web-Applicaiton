import React, { useState, useEffect } from 'react';
import * as S from './SelectItemInputStyles';
import {
  Grid,
  Typography,
  FormControl,
  OutlinedInput,
  IconButton,
  InputAdornment,
  InputLabel,
} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

const SelectItemInput: React.FC = () => {
  const [itemList, setItemList] = useState<
    {
      start: string;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      adder?: boolean;
    }[]
  >([]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    console.log(key);
    console.log(event.target.value);
  };

  useEffect(
    () => {
      const type = 'boolean';
      if (type !== 'boolean') {
        setItemList([
          {
            start: 'YES',
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => onChangeInput(event, 'YES'),
          },
          {
            start: 'NO',
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => onChangeInput(event, 'NO'),
          },
        ]);
      } else {
        setItemList([
          {
            start: '1',
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => onChangeInput(event, '1'),
            adder: true,
          },
        ]);
      }
    },
    [
      /* type */
    ]
  );

  const onClickAdderBtn = () => {
    setItemList([
      ...itemList,
      {
        start: `${itemList.length + 1}`,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
          onChangeInput(event, `${itemList.length + 1}`),
        adder: true,
      },
    ]);
  };

  return (
    <S.SelectItemInput container spacing={3}>
      <Grid item xs={12} md={1}>
        <S.Title variant="h6">선택 항목</S.Title>
      </Grid>
      <Grid item xs={12} md={11}>
        <Grid container spacing={2}>
          {itemList.map((item, idx) => {
            return (
              <Grid item xs={12} key={idx}>
                <FormControl variant="outlined" fullWidth size="small" color="secondary" required>
                  <InputLabel htmlFor="select-item">SelectItem</InputLabel>
                  <OutlinedInput
                    id="select-item"
                    type={'text'}
                    startAdornment={
                      <S.SelectItemName position="start">{item.start}</S.SelectItemName>
                    }
                    endAdornment={
                      item.adder ? (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="add select item input"
                            onClick={onClickAdderBtn}
                            color="secondary"
                          >
                            <AddBoxIcon fontSize="large" />
                          </IconButton>
                        </InputAdornment>
                      ) : null
                    }
                    labelWidth={95}
                    onChange={item.onChange}
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
