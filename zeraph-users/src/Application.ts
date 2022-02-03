import { ApplicationAlreadyPreparedException } from '@vyrnn/zeraph-core';

(async () => {
  const verifyIfIsTrue = (isTrue: boolean) => isTrue;

  if (verifyIfIsTrue(true)) {
      throw new ApplicationAlreadyPreparedException(
          409,
          'application already prepared'
      );
  } else {
      console.log('É true');
  }
})();
