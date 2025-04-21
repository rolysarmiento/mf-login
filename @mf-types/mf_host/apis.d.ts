
    export type RemoteKeys = 'mf_host/prueba' | 'mf_host/httpsclient';
    type PackageType<T> = T extends 'mf_host/httpsclient' ? typeof import('mf_host/httpsclient') :T extends 'mf_host/prueba' ? typeof import('mf_host/prueba') :any;