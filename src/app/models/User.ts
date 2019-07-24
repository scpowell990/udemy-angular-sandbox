import { EmailValidator } from '@angular/forms';

export interface User {
    firstName: string,
    lastName: string,
    email: string,
    isActive?: boolean,
    registered?: any
    hide?: boolean
}

// '?' == optional