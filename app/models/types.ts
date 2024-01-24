export type ApiResponse =
  | {
      success: true;
      data: any;
    }
  | {
      success: false;
      errorMessage: string;
    };

export type IconVariant =
  | 'star';