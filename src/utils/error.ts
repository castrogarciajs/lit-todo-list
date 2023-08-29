function errorMessage(error: Error | unknown, message: string) {
  if (error instanceof Error) {
    console.log(`${message}: ${error.message}`);
    return;
  }
  console.log(`UPS!: somthing error ${{ error }}`);
  return;
}

export { errorMessage };
