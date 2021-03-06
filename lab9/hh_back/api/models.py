from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(default='')
    city = models.CharField(max_length=200)
    address = models.TextField(default='')

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address

        }

class Vacancy(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(default='')
    salary = models.FloatField(max_length=200)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True, related_name='products')

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': {
                'id': self.company.id,
                'name': self.company.name
            },
        }
