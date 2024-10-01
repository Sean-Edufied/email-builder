import React from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';

import { Box, Stack, SxProps } from '@mui/material';

import Swatch from './Swatch';

const DEFAULT_PRESET_COLORS = [
  '#F39325',
  '#E67916',
  '#6D223D',
  '#fff',
  '#1D79AF',
  '#1E6794',
  '#FACA2A',
  '#fff',
  '#16ACA7',
  '#009E94',
  '#E45E5F',
  '#fff',
  '#289B37',
  '#00903C',
  '#FB9B49',
  '#AFC30F',
  '#9CAF10',
  '#CF0E5C',
  '#fff',
  '#FFCD00',
  '#F9B104',
  '#174082',
  '#fff',
  '#CC1619',
  '#B21718',
  '#2B4175',
  '#fff',
  '#3C3C3B',
  '#989699',
  '#CCCCCC',
  '#E6E6E6',
  '#EBEBEB',
  '#fff',
  '#203E54',
  '#203E54',
  '#fff',
  '#09417A',
  '#E95121',
];

const SX: SxProps = {
  p: 1,
  '.react-colorful__pointer ': {
    width: 16,
    height: 16,
  },
  '.react-colorful__saturation': {
    mb: 1,
    borderRadius: '4px',
  },
  '.react-colorful__last-control': {
    borderRadius: '4px',
  },
  '.react-colorful__hue-pointer': {
    width: '4px',
    borderRadius: '4px',
    height: 24,
    cursor: 'col-resize',
  },
  '.react-colorful__saturation-pointer': {
    cursor: 'all-scroll',
  },
  input: {
    padding: 1,
    border: '1px solid',
    borderColor: 'grey.300',
    borderRadius: '4px',
    width: '100%',
  },
};

type Props = {
  value: string;
  onChange: (v: string) => void;
};
export default function Picker({ value, onChange }: Props) {
  return (
    <Stack spacing={1} sx={SX}>
      <HexColorPicker color={value} onChange={onChange} />
      <Swatch paletteColors={DEFAULT_PRESET_COLORS} value={value} onChange={onChange} />
      <Box pt={1}>
        <HexColorInput prefixed color={value} onChange={onChange} />
      </Box>
    </Stack>
  );
}
