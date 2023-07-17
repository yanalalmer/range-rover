import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const SSlider = styled.div`
  width: 100%;
  height: 100vh;
`;
export const SSlides = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
export const SSlide = styled.div`
  min-height: 40rem;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  :last-child {
    flex: 2;
  }
  img {
    height: 100%;
  }
`;
export const SSkew = styled.div``;
export const SSkewFix = styled.div``;
