import { css } from 'styled-components';

export type BreakPointValueType = { [key: number]: string };
export type BreakPointPropsType = {};

export const breakpoints = (
    cssProp = '',
    cssPropUnits = '',
    values: [BreakPointValueType],
    mediaQueryType = ''
) => {
    const breakpointProps = values.reduce(
        (mediaQueries: string, value: BreakPointValueType) => {
            const [screenBreakpoint, cssPropBreakpoint] = [
                Object.keys(value)[0],
                Object.values(value)[0],
            ];
            return (mediaQueries += `
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
    }
    `);
        },
        ''
    );
    return css([breakpointProps] as BreakPointPropsType);
};
