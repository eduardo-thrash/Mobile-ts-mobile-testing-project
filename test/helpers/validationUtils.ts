export function validate(result: boolean, expect: boolean, successMessage: string, errorMessage: string): void {
  if (result === expect) {
    console.log(successMessage);
  } else {
    throw new Error(errorMessage);
  }
}
