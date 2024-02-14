<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { WorkersController } from './controllers/workers.controller';
import { WorkersService } from './services/workers.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { CustomerController } from './controllers/customers.controller';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/products.service';
import { ProductController } from './controllers/products.controller';
import { InventoryService } from './services/invenotory.service';
import { InventoryController } from './controllers/inventory.controller';
import { SalesService } from './services/sales.service';
import { SalesController } from './controllers/sales.controller';
import { ReportService } from './services/reports.service';
import { ReportsController } from './controllers/reports.controller';
import { Providers } from './providers/providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [
    UsersController,
    WorkersController,
    CustomerController,
    ProductController,
    InventoryController,
    SalesController,
    ReportsController,
  ],
  providers: [
    ...Providers,
    UsersService,
    WorkersService,
    CustomerService,
    ProductService,
    InventoryService,
    SalesService,
    ReportService,
  ],
  exports: [
    ...Providers,
    UsersService,
    WorkersService,
    CustomerService,
    ProductService,
    InventoryService,
    SalesService,
    ReportService,
  ],
})
export class MsModule {}
=======
import { Module } from '@nestjs/common';
import { WorkersController } from './controllers/workers.controller';
import { WorkersService } from './services/workers.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { CustomerController } from './controllers/customers.controller';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/products.service';
import { ProductController } from './controllers/products.controller';
import { InventoryService } from './services/invenotory.service';
import { InventoryController } from './controllers/inventory.controller';
import { SalesService } from './services/sales.service';
import { SalesController } from './controllers/sales.controller';
import { ReportService } from './services/reports.service';
import { ReportsController } from './controllers/reports.controller';
import { BillsService } from './services/bills.service';
import { BillsController } from './controllers/bills.controller';
import { Providers } from './providers/providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [
    UsersController,
    WorkersController,
    CustomerController,
    ProductController,
    InventoryController,
    SalesController,
    ReportsController,
    BillsController,
  ],
  providers: [
    ...Providers,
    UsersService,
    WorkersService,
    CustomerService,
    ProductService,
    InventoryService,
    SalesService,
    ReportService,
    BillsService,
  ],
  exports: [
    ...Providers,
    UsersService,
    WorkersService,
    CustomerService,
    ProductService,
    InventoryService,
    SalesService,
    ReportService,
    BillsService,
  ],
})
export class MsModule {}
>>>>>>> 3906066 (se agrega funcionalidad de compartir)
