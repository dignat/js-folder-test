const RGP = ()  =>  {
    const knightIsAwake = false;
    const archerIsAwake = false;
    const prisonerIsAwake = false;
    const petDogIsPresent = false;
    const canExecuteFastAttack = (knightIsAwake) =>  {
        if (!knightIsAwake) {
            return true;
        }
        return false;
    }
    const canSpy = (knightIsAwake, archerIsAwake, prisonerIsAwake) => {
        if (!knightIsAwake && !archerIsAwake && !prisonerIsAwake) {
            return false;
        }
        return true;
    };
    const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
        if (!archerIsAwake && prisonerIsAwake) {
            return true;
        }
        return false;
    }
    const canFreePrisoner = (knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) => {
        if (petDogIsPresent) {
            if (!archerIsAwake) {
                return true;
            } else {
                return false;
            }
        } else {
            if (prisonerIsAwake && !archerIsAwake && !knightIsAwake) {
                return true;
            } else {
                return false;
            }
        }
    }

    return{
        knightIsAwake,
        archerIsAwake,
        prisonerIsAwake,
        petDogIsPresent,
        canExecuteFastAttack,
        canSpy,
        canSignalPrisoner,
        canFreePrisoner
    }
}

console.log(RGP().canFreePrisoner(false, true, true, false))