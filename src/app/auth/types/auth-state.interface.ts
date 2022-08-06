import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { BackendErrorsInterface } from "./backend-errors.interface";

export interface AuthStateInterface {
    isSubmitting: boolean
    currentUser: CurrentUserInterface | null
    isLoggedIn: boolean | null
    validationErrors: BackendErrorsInterface | null
    isLoading: boolean
  }
  