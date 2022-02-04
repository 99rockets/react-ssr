# SSL certificate for localhost

## Fast option (without CA)

```sh
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365 -nodes -subj '/CN=localhost'
```

###### Parameters for the subject:
```sh
-subj '/C=US/ST=Massachusetts/L=Boston/O=Company/OU=Org/CN=www.example.com'
```

You can add -nodes (short for no DES) if you don't want to protect your private key with a passphrase.

## Option with certificate authority (CA)

### CA certificate

###### 1. Create the root CA directory
```sh
mkdir CA && cd $_
```

###### 2. Generate the private key of the root CA
```sh
openssl genrsa -out CA.key -des3 2048
```

###### 3. Generate the self-signed root CA certificate
```sh
openssl req -x509 -sha256 -new -nodes -days 3650 -key CA.key -out CA.pem
```
In this example, the validity period is 3650 days

### Localhost certificate

###### 1. Create a localhost.ext file with information for signed SSL certificate
```sh
cd ..
touch localhost.ext
```
###### localhost.ext
```sh
authorityKeyIdentifier = keyid,issuer
basicConstraints = CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
IP.1 = 127.0.0.1
```

###### 2. Generate a localhost private key:
```sh
openssl genrsa -out localhost.key -des3 2048
```

###### 3. Generate a CSR (Certificate Signing Request)
```sh
openssl req -new -key localhost.key -out localhost.csr
```

###### 4. Generate a localhost certificate file
```sh
openssl x509 -req -in localhost.csr -CA ./CA/CA.pem -CAkey ./CA/CA.key -CAcreateserial -days 3650 -sha256 -extfile localhost.ext -out cert.pem # or -out localhost.crt
```
Each issued certificate must contain a unique serial number assigned by the CA.
SRL (.srl) is the file that keeps track of the latest serial number available for new certs.

###### 5. Generate a localhost decrypted key
```sh
openssl rsa -in localhost.key -out key.pem # or -out localhost.decrypted.key
```

You will also need to change the trust settings of localhost certificate (cert.pem) in Keychain
