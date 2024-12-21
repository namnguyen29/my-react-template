import { memo } from 'react';

type Props = {
  titleCard: string;
};

export const TitleCard = memo(
  ({ titleCard }: Props) => {
    console.log('re-render me');

    return <div>My Title Card: {titleCard}</div>;
  }
  // (prev, next) => prev.titleCard === next.titleCard //equality function | false => prev state isn't equal to nextre-render
);
