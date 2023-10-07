export interface Claim {
    id: number;
    claimDate: string;
    claimMsg: string;
    employerFullName: string;
    employer: any; // Modifiez le type en fonction de votre modèle Employer
    responsible: any; // Modifiez le type en fonction de votre modèle Responsible
  }