package com.example.spotifybackend.repository;

import com.example.spotifybackend.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IAccountRepository extends JpaRepository<Account, Integer> {

    @Query(value = "select account.* from account " +
            "where account.id = :id", nativeQuery = true)
    Account findAccountById(@Param("id") Integer id);

    @Query(value = "select account.* from account where account.username = :username", nativeQuery = true)
    Account findAccountByUsername(@Param("username") String username);


    @Transactional
    @Modifying
    @Query(value = "update account set password = :password where account.id = :id", nativeQuery = true)
    void updatePassword(@Param("password") String encode, @Param("id") Integer id);
}
