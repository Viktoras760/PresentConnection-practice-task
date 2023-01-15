# StudentAPI

### Pasirinkta tema: Studentų tvarkymas (Sąrašo peržiūra, Pasirinkto studento peržiūra ir Naujo studento pridėjimas).

#### Pasirinkta duomenų bazė: Microsoft SQL Server (pirmam paleidimui turėtų reikėti paleisti 'dotnet ef database update' komandą lokaliai duomenų bazei sukurti)

# API projektas (Swaggerio atvaizdavimas):
## API endpointai:
![image](https://user-images.githubusercontent.com/35394736/212547054-81b16920-bf4b-4f28-9eca-271090c1cf7f.png)

### Studentų sąrašo pasirinkto puslapio peržiūra (GET api/students/page/{page}):
![image](https://user-images.githubusercontent.com/35394736/212547232-635c3af0-ae18-47be-a512-71a3f605d69d.png)
### Studentų sąrašo pasirinkto puslapio peržiūra su pasirinktu filtru (GET api/students/page/{page}):
![image](https://user-images.githubusercontent.com/35394736/212547372-9c884e7d-8810-4f75-ba4c-b22cd941fc72.png)
### Naujo studento pridėjimas (POST api/students):
![image](https://user-images.githubusercontent.com/35394736/211796305-30b5770e-ec30-4d81-9b68-2b9ffad5dfeb.png)
### Pasirinkto studento peržiūra (GET api/students/{id}):
![image](https://user-images.githubusercontent.com/35394736/211796548-64229137-aa3a-44f6-9a2d-0d2d78bb6194.png)

# Naudojami duomenys:
![image](https://user-images.githubusercontent.com/35394736/212547128-05e1e5e8-9258-4a04-a6cf-7c5f0c5957e7.png)

# Vartotojo sąsajos projektas:
### Pagrindinis puslapis (Home page):
![image](https://user-images.githubusercontent.com/35394736/211796959-566a33cf-e3c4-4d31-8a1f-e7c86d6d8212.png)
### Studentų sąrašo peržiūra (Student list):
![image](https://user-images.githubusercontent.com/35394736/212547399-e9628f35-13cb-49ed-9e2f-d0519c938bcc.png)
### Pasirinkto studento informacijos peržiūra (Student info):
![image](https://user-images.githubusercontent.com/35394736/211797722-93a31ca3-dfd8-4d7d-86c3-f4a411c28c18.png)
(Visi laukai yra readonly, kadangi tai yra tik peržiūra)
### Naujo studento pridėjimas (Add new student):
![image](https://user-images.githubusercontent.com/35394736/211797973-e813577f-99de-4999-af23-3bc3dd0b4990.png)
