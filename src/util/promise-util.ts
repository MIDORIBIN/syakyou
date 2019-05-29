export function sleep(waitSeconds: number) {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, waitSeconds * 1000);
  });
}
