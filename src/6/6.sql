WITH TopProductsIn2016 as(
select odt.product_id, SUM(odt.quantity) as total_quantity  
FROM order_details odt 
JOIN orders od ON odt.order_id = od.order_id 
WHERE YEAR(od.order_date) = 2016
group by odt.product_id
order by total_quantity DESC
LIMIT 5
),
TopProductsIn2017  as(
select odt.product_id, SUM(odt.quantity) as total_quantity  
FROM order_details odt 
JOIN orders od ON odt.order_id = od.order_id 
WHERE YEAR(od.order_date) = 2017
group by odt.product_id
order by total_quantity DESC
LIMIT 5
)
select p.product_name 
from products p
where p.product_id IN(select product_id FROM TopProductsIn2016)
AND p.product_id IN(select product_id FROM TopProductsIn2017)