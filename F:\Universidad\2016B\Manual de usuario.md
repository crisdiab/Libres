


Manual de Usuario
=================

[TOC]

Introducción
-------------
El presente manual de usuario ofrece una descripción del sistema de gestión de facturas tanto como para un usuario final o un administrador, este manual pretende guiar al usuario a la utilización correcta así como también aprovechar todas las ventajas que la aplicación ofrece


El gestionador de versiones es GitHub, aquí puede ser encontrado el proyecto completo
link: https://github.com/crisdiab/Libres
 El sistema de gestión de error es el que proporciona GitHub por defecto.

se ha usado Sailsjs como Backend y Angularjs como Frontend

la base de datos utilizada es PostgreSQL

el deploy se encuentra realizado en Heroku.com
https://gestionador-facturas.herokuapp.com/app/index.html#/inicio 

Inicio
-------------
![enter image description here](https://raw.githubusercontent.com/crisdiab/Libres/master/appFacturas/assets/images/inicio.PNG)

al abrir el sistema se mostrará la pantalla de "log-in" aquí se accederá a los usuario correspondientes previamente creados, si es la primera vez que se usa el sistema, en la opción "registrarse" se creará un nuevo usuario con las credenciales deseadas. 


![enter image description here](https://raw.githubusercontent.com/crisdiab/Libres/master/appFacturas/assets/images/registrase.PNG?raw=true)

cuando se haya llenado los campos correctamente podremos usar este nuevo usuario.


Consultas
-------------
#### Facturas sin asignar
en esta sección se muestran las facturas digitales ingresadas por xml, estas estarán pendientes a ser clasificadas por su tipo de gasto.


![enter image description here](https://raw.githubusercontent.com/crisdiab/Libres/master/appFacturas/assets/images/consultar%20todas%20las%20facturas.PNG?raw=true)
En esta sección se consultarán todas las facturas ingresadas por el usuario,  ver los datos de la factura creada así como su detalle.
 
#### Facturas de gastos de negocio

![enter image description here](https://github.com/crisdiab/Libres/blob/master/appFacturas/assets/images/facturas%20gastos%20de%20negocio.PNG?raw=true)

Se mostrará los gastos parciales organizados por meses para los diferentes tipos de gastos.

Esta consulta se puede realizar por medio de un filtro que será el periodo en el que se haya ingresado la factura.
#### Consultar Gastos Personales

![enter image description here](https://raw.githubusercontent.com/crisdiab/Libres/master/appFacturas/assets/images/Consultar%20Gastos%20Personales%20detalle%20por%20periodo.PNG?raw=true)

según lo dispuesto por el SRI
[![](http://static.conmicelu.com/wp-content/uploads/2016/01/sri.jpg)](http://www.sri.gob.ec/de/171)

De acuerdo a la Resolución NAC-DGERCGC11-00432 deben presentar la información relativa a los gastos personales, correspondientes al año inmediato anterior, las personas naturales que en dicho período superen en sus gastos personales el 50% de la fracción básica desgravada de Impuesto a la Renta vigente para el ejercicio impositivo declarado.

Las personas naturales podrán deducirse sus gastos personales, sin IVA ni ICE, así como los de su cónyuge e hijos menores de edad o con discapacidad, que no perciban ingresos gravados y que dependan del contribuyente.

No serán deducibles los costos o gastos que se respalden con comprobantes de venta no autorizados, conforme lo señala el Reglamento de Comprobantes de Venta, Retención y Documentos Complementarios o que no se respalden en lo señalado en el artículo 34 del Reglamento para la Aplicación de la Ley de Régimen Tributario Interno. Con base a lo mencionado, no serán deducibles los costos o gastos que se respalden en comprobantes de venta emitidos en el exterior.

La deducción total por gastos personales no podrá superar el 50% del total de los ingresos gravados del contribuyente y en ningún caso será mayor al equivalente a 1.3 veces la fracción básica desgravada del Impuesto a la Renta de personas naturales.

Sin perjuicio de los límites señalados en el numeral anterior, la cuantía máxima de cada tipo de gasto no podrá exceder a la fracción básica desgravada de Impuesto a la Renta en:

Vivienda: 0,325 veces
Educación: 0,325 veces
Alimentación: 0,325 veces
Vestimenta: 0,325 veces
Salud: 1,3 veces

se mostrará los gastos totales alcanzados hasta el momento por el usuario que se encuentre activo en el sistema.



Reportes
-------------

####Gastos Personales por periodo
![enter image description here](https://github.com/crisdiab/Libres/blob/master/appFacturas/assets/images/facturas%20gastos%20de%20negocio.PNG?raw=true)

Muestra los gastos personales por tipo de gasto, de a cuerdo al período seleccionado

####Gastos Personales detalle Mensual

Muestra detalle de gastos de personales organizados por meses

####Detalle de Gastos Personales
![enter image description here](https://raw.githubusercontent.com/crisdiab/Libres/master/appFacturas/assets/images/Consultar%20Detalle%20de%20Gastos%20Personales.PNG?raw=true)

Despliega el detalle de la factura y los valores en los tipos de gasto que esta haya tenido.


####Gastos de Negocio Mensual
![enter image description here]
(https://github.com/crisdiab/Libres/blob/master/appFacturas/assets/images/gasto%20de%20negocio%20mensual.PNG?raw=true)

Muestra detalle de gastos de negocio organizados por meses.


####Detalle de Gastos de Negocio

![enter image description here](https://github.com/crisdiab/Libres/blob/master/appFacturas/assets/images/facturas%20gastos%20de%20negocio.PNG?raw=true)

Muestra los gastos personales por tipo de gasto de negocio, de a cuerdo al período seleccionado









Ingresar
-------------
ingresar proveedores y facturas.

#### Ingresar Proveedor
En esta se nos permite ingresar nuevos proveedores así como también editar los datos de los que ya hayan sido creados.

Proveedores actuales:
![enter image description here](https://raw.githubusercontent.com/crisdiab/Libres/master/appFacturas/assets/images/proveedores%20actuales.PNG?raw=true)

Agregar proveedor:

![enter image description here](https://raw.githubusercontent.com/crisdiab/Libres/master/appFacturas/assets/images/nuevo%20proveedor.PNG?raw=true)

(el sistema validará los datos)

#### Ingresar Factura Fisica
![enter image description here](https://github.com/crisdiab/Libres/blob/master/appFacturas/assets/images/factura%20fisica%202.PNG?raw=true)

Permite al usuario ingresar nuevas facturas que estén en formato físico, para cada factura, se selecciona un proveedor que haya sido registrado previamente.
Se debe especificar que tipo de gastos contiene esta factura.
 
#### Ingresar Factura Xml

![enter image description here](https://raw.githubusercontent.com/crisdiab/Libres/master/appFacturas/assets/images/factura%20xml.PNG?raw=true)

Permite al usuario ingresar la facturas que entes en formato digital que hayan sido enviadas a un correo electrónico, el formato de estas facturas es XML (eXtensible Markup Language)


Editar Perfil
-------------
![enter image description here](https://raw.githubusercontent.com/crisdiab/Libres/master/appFacturas/assets/images/gestion%20usuario.PNG?raw=true)

Aquí el usuario puede modificar las credenciales de su perfil.

Limites por periodo 
-------------
![enter image description here](https://raw.githubusercontent.com/crisdiab/Libres/master/appFacturas/assets/images/limites.PNG?raw=true)

 Visualizar los limites de gastos que tenemos para el periodo seleccionado.

