Name: sequelize_api
Version: 1.0.1
Release: 1
Summary: darkkazma sequelize api

Group: System Environment/Daemons
Vendor: darkkazma
License: Commercial, See http://www.darkkazma.cf for more details.

%description
This package will install darkkazma sequelize_api

%define _builddir ./
%define _rpmdir ./
%define _prefix /usr/service
%define _build_name_fmt %%{name}-%%{version}-%%{release}%{dist}.%%{arch}.rpm

%files
%{_prefix}/api-v2/sequelize-api

%exclude %{_prefix}/api-v2/sequelize-api/sequelize.spec
%exclude %{_prefix}/api-v2/sequelize-api/test


%install
%{__mkdir} -p %{buildroot}%{_prefix}/api-v2/sequelize-api
%{__cp} -Rp ./* %{buildroot}%{_prefix}/api-v2/sequelize-api