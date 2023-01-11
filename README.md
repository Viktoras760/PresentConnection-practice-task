# StudentAPI

### Pasirinkta tema: Studentų tvarkymas (Sąrašo peržiūra, Pasirinkto studento peržiūra ir Naujo studento pridėjimas).

#### Pasirinkta duomenų bazė: Microsoft SQL Server (pirmam paleidimui turėtų reikėti paleisti 'dotnet ef database update' komandą lokaliai duomenų bazei sukurti)

# API projektas (Swaggerio atvaizdavimas):
## Endpointai ir duomenų struktūra:
![image](https://user-images.githubusercontent.com/35394736/211795686-82c6af77-c8b1-44ad-9d13-676ace2826a2.png)

### Studentų sąrašo peržiūra (GET api/students):
![image](https://user-images.githubusercontent.com/35394736/211796199-fe731aae-820a-4859-8275-f29f5deed1de.png)
### Naujo studento pridėjimas (POST api/students):
![image](https://user-images.githubusercontent.com/35394736/211796305-30b5770e-ec30-4d81-9b68-2b9ffad5dfeb.png)
### Pasirinkto studento peržiūra (GET api/students/{id}):
![image](https://user-images.githubusercontent.com/35394736/211796548-64229137-aa3a-44f6-9a2d-0d2d78bb6194.png)


# Vartotojo sąsajos projektas:
### Pagrindinis puslapis (Home page):
![image](https://user-images.githubusercontent.com/35394736/211796959-566a33cf-e3c4-4d31-8a1f-e7c86d6d8212.png)
### Studentų sąrašo peržiūra (Student list):
![image](https://user-images.githubusercontent.com/35394736/211797162-bcf2d96c-8c35-4b30-a633-0ef205364903.png)
### Pasirinkto studento informacijos peržiūra (Student info):
![image](https://user-images.githubusercontent.com/35394736/211797722-93a31ca3-dfd8-4d7d-86c3-f4a411c28c18.png)
(Visi laukai yra readonly, kadangi tai yra tik peržiūra)
### Naujo studento pridėjimas (Add new student):
![image](https://user-images.githubusercontent.com/35394736/211797973-e813577f-99de-4999-af23-3bc3dd0b4990.png)
