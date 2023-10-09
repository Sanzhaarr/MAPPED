declare module 'vanta/src/vanta.globe' {
    const vanta: (options: any) => any;
    export default vanta;
}

declare module 'aos' {
    interface AOS {
      init(options?: AOSOptions): void;
      refresh(options?: AOSOptions): void;
      refreshHard(): void;
    }
  
    interface AOSOptions {
      duration?: number;
      once?: boolean;
    }
  
    const aos: AOS;
    export default aos;
  }
  
