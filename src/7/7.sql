select YEAR(o.order_date) as year ,
SUM(od.quantity * p.unit_price * (1-od.discount)) as toltal_of_year
from orders o 
JOIN order_details od ON o.order_id = od.order_id 
JOIN products p  ON od.product_id = p.product_id
WHERE o.ship_region = 'Western Europe' 
GROUP BY year