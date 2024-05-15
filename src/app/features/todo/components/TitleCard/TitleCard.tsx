import { memo } from 'react';

type Props = {
  titleCard: string;
  callback: () => void;
};

export const TitleCard = memo(
  ({ titleCard, callback }: Props) => {
    console.log('re-render me');

    return (
      <>
        {callback()}
        <div>My Title Card: {titleCard}</div>
      </>
    );
  }
  // (prev, next) => prev.titleCard === next.titleCard //equality function | false => prev state isn't equal to nextre-render
);
