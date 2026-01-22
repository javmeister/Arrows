
export interface UserGameProfile {
  profile: {
    familyName: string;
    givenName: string;
    email: string;
    picture: string;
  };
  currentLevel: number;
  highestLevelCompleted: number;
}
